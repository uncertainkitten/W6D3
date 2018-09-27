class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (!(this.followState)) {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick() {
    const FollowToggle = this;

    event.preventDefault();

    if (!(this.followState)) {
      $.ajax({
        url: `/users/:id/follow`,
        dataType: 'json',
        method: 'POST',
        success: function() {
          this.followState = true;
          this.render();
        }
      });
    } else {
      $.ajax({
        url: `/users/:id/follow`,
        dataType: 'json',
        method: 'DELETE',
        success: function() {
          this.followState = false;
          this.render();
        }
      });
    }
  }
}


module.exports = FollowToggle;
