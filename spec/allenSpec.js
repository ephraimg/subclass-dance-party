describe('makeAllen', function() {

  var allen, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    allen = new makeAllen(10, 20, timeBetweenSteps);
    $('body').append(allen.$node);
    allen.$node.hide();
  });

  it('should have a jQuery $node object', function() {
    expect(allen.$node).to.be.an.instanceof(jQuery);
  });

  it('should have an animation css style', function() {
    expect(allen.$node.css("animation-name")).to.not.equal(void 0);
  });

  it('should repeat its animation forever', function() {
    expect(allen.$node.css("animation-iteration-count")).to.equal('infinite');
  });

  // it('should change its vertical position', function() {
  //   sinon.spy(allen.$node, 'css');
  //   var oldTop = allen.$node.css("top");
  //   var delay = function() {
  //     var newTop;
  //     return setTimeout(function() {
  //       newTop =  allen.$node.css("top");
  //       console.log(newTop);
  //       return newTop;
  //     }, 600);
  //   };
  //   console.log(delay(), oldTop);
  //   expect(delay()).to.not.equal(oldTop);
  // });

});