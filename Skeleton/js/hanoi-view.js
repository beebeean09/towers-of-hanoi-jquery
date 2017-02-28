class View {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.clicked = null;
  }

  setupTowers () {

    for (let i = 0; i < 3; i++) {
      let $ul = $(`<ul class=${i}></ul>`);
      for (let j = 0; j < 3; j++) {
        $ul.append($('<li/>'));
      }
      this.$el.append($ul);
    }

  }

  render() {
    $('li').removeClass();
    let towers = this.game.towers;
    for (let i = 0; i < towers.length; i++) {
      for (let j = 0; j < towers[i].length; j++) {
        $('ul').eq(i).children().eq(j).addClass(`${towers[i][j]}`);
      }
    }
  }

  clickTower() {
    let that = this;
    $('ul').click(e => {
      let $e = $(e.currentTarget);
      if (that.clicked === null) {
        that.clicked = $e.attr('class');
      } else {
        that.game.move(that.clicked, $e.attr('class'));
        that.clicked = null;
      }
    });
  }

}

module.exports = View;
