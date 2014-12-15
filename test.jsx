console.log('init')

var Button = React.createClass({

  getInitialState: function () {
    return { show: false };
  },
  handleClick: function () {
    this.setState({ show: !this.state.show });
  },
  render: function () {
    var str = this.state.show ? 'hello' : '';
    return (
      <div>
        <button onClick={this.handleClick}>Test</button>
        <p>{str}</p>
      </div>
    );
  }
});



var Table = React.createClass({

  data: {
    'Max temperature': [15.5, 14.2, 12.9, 13.1, 14.8],
    'Average temperature': [10, 9.4, 8.7, 9.2, 11],
    'Min temperature': [-10.2, -7, -6.8, -8.1, -9.2]
  },

  getDataArray: function(){

    var arr = []

    for ( key in this.data ) {
      arr.push({ key: key, values: this.data[key] })
    }

    return arr;

  },

  renderCell: function(){
    return (
      <td></td>
    );
  },

  renderTable: function(){

    return (
      <table>

        {
          this.getDataArray().map(function(item){
            return (
              <tr>
                <th>{ item.key }</th>
                {
                  item.values.map(function(value){
                    return (
                      <td>{ value }</td>
                    )
                  })
                }
              </tr>
            )
          })
        }

      </table>
    );

  },
  render: function(){
    return this.renderTable();
  }

});

React.renderComponent(
  <Button />,
  document.getElementById('test')
);

React.renderComponent(
  <Table />,
  document.getElementById('table')
);
