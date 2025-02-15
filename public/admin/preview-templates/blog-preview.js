const BlogPreview = createClass({
  render: function() {
    const {entry, widgetFor} = this.props;
    return h('div', {},
      h('h1', {}, entry.getIn(['data', 'title'])),
      h('div', {"className": "text-gray-600"}, widgetFor('body'))
    );
  }
});

CMS.registerPreviewTemplate('blog', BlogPreview);