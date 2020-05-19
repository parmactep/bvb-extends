import EditorComponent from 'discourse/components/d-editor';

export default {
  name: 'editor-extend',
  initialize: function() {
    EditorComponent.reopen({
      resetTextFormat() {
        const text = this.preview.string.replace(/(<([^>]+)>)/ig,"");
        this.set("value", text);
      },
      init() {
        this._super();
        this.toolbar.addButton({
          id: "list1",
          group: "extras",
          icon: "paint-brush",
          shortcut: "Shift+0",
          title: "composer.olist_title",
          perform: e => this.resetTextFormat()
        });
      }
    })
  }
};
