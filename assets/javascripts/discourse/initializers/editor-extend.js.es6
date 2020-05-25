import EditorComponent from 'discourse/components/d-editor';

export default {
  name: 'editor-extend',
  initialize: function() {
    EditorComponent.reopen({
      resetTextFormat() {
        const text = this.preview.string.replace(/(<([^>]+)>)/ig,"");
        this.set("value", text);
      },
      undo() {
        document.execCommand('undo', true, null);
      },
      init() {
        this._super();
        this.toolbar.addButton({
          id: "clear-format",
          group: "extras",
          icon: "paint-brush",
          shortcut: "Shift+0",
          title: "bvb-extend.editor.clear-format",
          perform: e => this.resetTextFormat()
        });
        this.toolbar.addButton({
          id: "undo",
          group: "extras",
          icon: "undo",
          shortcut: "Ctrl(Command)+Z",
          title: "bvb-extend.editor.undo",
          perform: e => this.undo()
        });
      }
    })
  }
};
