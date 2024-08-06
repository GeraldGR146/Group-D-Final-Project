from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Review, Product

review_bp = Blueprint('review_routes', __name__)

@review_bp.route('/products/<string:product_id>/reviews', methods=['POST'])
@jwt_required()
def create_review(product_id):
    current_user = get_jwt_identity()
    
    # Retrieve and validate form data
    try:
        rating = int(request.form['rating'])
        comment = request.form.get('comment', '')

        # Check if rating is provided
        if not rating:
            return jsonify({'message': 'Rating is required'}), 400
        
        # Validate rating
        if rating < 1 or rating > 5:
            return jsonify({'message': 'Rating must be between 1 and 5'}), 400
        
        # Check if the product exists
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'message': 'Product not found'}), 404

        # Create and save the review
        new_review = Review(
            review_id=Review.generate_review_id(),
            product_id=product_id,
            consumer_id=current_user['user_id'],
            rating=rating,
            comment=comment
        )
        
        db.session.add(new_review)
        db.session.commit()
        
        return jsonify({'message': 'Review created successfully'}), 201
    
    except (ValueError, KeyError) as e:
        return jsonify({'message': 'Invalid input: ' + str(e)}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error: ' + str(e)}), 500

@review_bp.route('/reviews/<string:review_id>', methods=['GET'])
@jwt_required()
def get_review(review_id):
    try:
        review = Review.query.get(review_id)
        if not review:
            return jsonify({'message': 'Review not found'}), 404
        
        return jsonify({
            'review_id': review.review_id,
            'product_id': review.product_id,
            'consumer_id': review.consumer_id,
            'rating': review.rating,
            'comment': review.comment,
            'created_at': review.created_at
        }), 200
    
    except Exception as e:
        return jsonify({'message': 'Error: ' + str(e)}), 500

@review_bp.route('/products/<string:product_id>/reviews', methods=['GET'])
@jwt_required()
def list_reviews(product_id):
    try:
        sort_by = request.args.get('sort_by', 'created_at')  # Default sorting by creation date
        order = request.args.get('order', 'desc')  # Default order is descending
        rating_filter = request.args.get('rating')  # Optional rating filter

        query = Review.query.filter_by(product_id=product_id)

        # Apply rating filter if provided
        if rating_filter:
            query = query.filter_by(rating=rating_filter)
        
        # Apply sorting
        if order == 'asc':
            query = query.order_by(getattr(Review, sort_by).asc())
        else:
            query = query.order_by(getattr(Review, sort_by).desc())
        
        reviews = query.all()
        
        if not reviews:
            return jsonify({'message': 'No reviews found for this product'}), 404
        
        result = [{
            'review_id': review.review_id,
            'consumer_id': review.consumer_id,
            'rating': review.rating,
            'comment': review.comment,
            'created_at': review.created_at
        } for review in reviews]
        
        return jsonify(result), 200
    
    except Exception as e:
        return jsonify({'message': 'Error: ' + str(e)}), 500

@review_bp.route('/reviews/<string:review_id>', methods=['PUT'])
@jwt_required()
def update_review(review_id):
    current_user = get_jwt_identity()
    
    try:
        review = Review.query.get(review_id)
        if not review:
            return jsonify({'message': 'Review not found'}), 404
        
        # Check if the current user is the owner of the review
        if review.consumer_id != current_user['user_id']:
            return jsonify({'message': 'Unauthorized'}), 403

        rating = request.form.get('rating')
        comment = request.form.get('comment')

        # Validate rating if provided
        if rating:
            rating = int(rating)
            if rating < 1 or rating > 5:
                return jsonify({'message': 'Rating must be between 1 and 5'}), 400
            review.rating = rating
        
        # Update comment if provided
        if comment is not None:
            review.comment = comment
        
        db.session.commit()
        
        return jsonify({'message': 'Review updated successfully'}), 200
    
    except (ValueError, KeyError) as e:
        return jsonify({'message': 'Invalid input: ' + str(e)}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error: ' + str(e)}), 500

@review_bp.route('/reviews/<string:review_id>', methods=['DELETE'])
@jwt_required()
def delete_review(review_id):
    current_user = get_jwt_identity()
    
    try:
        review = Review.query.get(review_id)
        if not review:
            return jsonify({'message': 'Review not found'}), 404
        
        # Check if the current user is the owner of the review
        if review.consumer_id != current_user['user_id']:
            return jsonify({'message': 'Unauthorized'}), 403

        db.session.delete(review)
        db.session.commit()
        
        return jsonify({'message': 'Review deleted successfully'}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error: ' + str(e)}), 500
