import { h, Component } from 'preact';
import ReactDOM from 'react-dom';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
  this.widget = this.props.widget;
  this.widget.renderEl({ el: this.widgetContainer }, this.props.onSuccess, this.props.onError);
}

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
  return <div ref={(div) => { this.widgetContainer = div; }} />
  }
};