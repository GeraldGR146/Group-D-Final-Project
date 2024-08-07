def validate_search_query(query):
    if not query or len(query.strip()) == 0:
        raise ValueError("Query tidak boleh kosong")
    if len(query) > 100:
        raise ValueError("Query terlalu panjang")
    return query