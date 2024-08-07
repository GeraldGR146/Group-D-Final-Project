import React from 'react';

class FooterSection extends React.Component {
  render() {
    return (
      <div className="flex-1 px-4">
        <h4 className="text-lg font-semibold mb-4">{this.props.title}</h4>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FooterSection;