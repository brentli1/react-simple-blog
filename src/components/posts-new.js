import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <input
        {...field.input}
        className="form-control"
        type="text"
      />
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="title" className="control-lab">Blog Title</label>
        <Field 
          name="title"
          component={this.renderTitleField}
          className="form-control"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
