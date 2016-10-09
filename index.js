const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const passengers = React.createElement('ul',{},[
  React.createElement('li',{},'Agnes'),
  React.createElement('li',{},'Muriel')
]);

// class OlderCoaster extends React.Component {
//   render() {
//     return React.createElement('div',{className:'oldercoaster'},[
//       React.createElement('p',{},"Two grannies having the time of their life!"),
//       React.createElement('p',{},"Passengers:"),
//       passengers
//     ]);
//   }
// };

const OlderCoaster = React.createClass({
  render: function(){
    return React.createElement('div',{className:'oldercoaster'},[
      React.createElement('p',{},"Two grannies having the time of their life!"),
      React.createElement('p',{},"Passengers:"),
      passengers
    ]);
  }
});

class InFrontOfYou extends React.Component {
  render() {
    // oh wells, jsx not supported
    // var tmp = <strong>right in front of you.</strong>;
    return React.createElement('div',{},[
      React.createElement('p',{}, "You shouldn't look too far."),
      React.createElement('p',{}, "Sometimes, the solution is ", React.createElement('strong',{},"right in front of you.") )]
    );
  }
};

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div',{className:'butcher-shop'},[
      React.createElement('p',{},'Hello! We have the following products for sale today:'),
      React.createElement('ul',{},
        BUTCHER_PRODUCTS.map((prod) => {
          return React.createElement('li',{},prod);
        })
      )
    ]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
