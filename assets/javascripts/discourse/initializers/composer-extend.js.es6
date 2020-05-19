import ComposerController from 'discourse/controllers/composer';

export default {
  name: 'composer-extend',
  initialize: function() {
    console.log('INIT');
    ComposerController.reopen({
      open(opts) {
        return this._super(opts).then(model => {
          const replyTo = model.get('replyOptions.userLink.anchor');
          if (replyTo) {
            model.prependText(`${replyTo}, `);
          }
          return model;
        });
      }
    })
  }
};
