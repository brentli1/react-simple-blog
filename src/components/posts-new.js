import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`

    return (
      <div className={className}>
        <label className="control-lab">{field.label}</label>      
        <input
          {...field.input}
          className="form-control"
          type="text"
        />
        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      console.log('made it here');
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field 
          name="title"
          component={this.renderField}
          className="form-control"
          label="Blog Title"
        />
        <Field 
          name="categories"
          component={this.renderField}
          className="form-control"
          label="Categories"
        />
        <Field 
          name="content"
          component={this.renderField}
          className="form-control"
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-default">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
