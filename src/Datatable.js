import React, { Component } from 'react';

class Datatable extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      url: 'https://api.punkapi.com/v2/beers',
      morning: true,
      dayTimeSelectedOption: 'morning',
      weekDaySelectedOption: 'weekday',
      runningTaxReport: false,
      weekday: true,
    }
    this.getUrl = this.getUrl.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleDayTimeChange = this.handleDayTimeChange.bind(this)
    this.handleReportChange = this.handleReportChange.bind(this)
    this.handleDayChange = this.handleDayChange.bind(this)
  }
  componentWillMount(){
    this.fetchData()
  }
  componentDidUpdate(){
    this.fetchData()
  }
  fetchData(){
    let makeUrl = this.getUrl(this.state.url)
    console.log(makeUrl)
    fetch(makeUrl)
      .then(response => response.json())
      .then(data => this.setState({items: data}))
  }
  getUrl(makeUrl) {
    let newURL = `${makeUrl}?${this.state.morning ? 'ebc_lt=10' : 'ebc_gt=30'}&${this.state.runningTaxReport ? 'ibu_gt=50' : 'ibu_lt=50'}&${this.state.weekday ? 'abv_lt=4' : 'abv_gt=6'}`
    return newURL
  }
  handleDayTimeChange(changeEvent) {
    this.setState({morning: !this.state.morning, dayTimeSelectedOption: changeEvent.target.value})
  }
  handleReportChange() {
    this.setState({runningTaxReport: !this.state.runningTaxReport})
  }
  handleDayChange(changeEvent) {
    this.setState({weekday: !this.state.weekday, weekDaySelectedOption: changeEvent.target.value})
  }
  render() {
    let items = this.state.items
    console.log(items)
    return (
      <div className='table-wrappper'>
        <h3>Filter</h3>
        <div className='well'>
          <div className="row">
            <div className="col-md-4">
              <label>Time of the day</label>
              <div className="radio">
                <label>
                  <input type="radio" name="dayTime" id="morning" value="morning" checked={this.state.dayTimeSelectedOption === 'morning'} onChange={this.handleDayTimeChange} />
                  Morning beer
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="dayTime" id="evening" value="evening" checked={this.state.dayTimeSelectedOption === 'evening'} onChange={this.handleDayTimeChange} />
                  Evening beer
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" checked={this.state.runningTaxReport} onChange={this.handleReportChange} />
                  <strong>Running tax report</strong>
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <label>Weekday/Weekend</label>
              <div className="radio">
                <label>
                  <input type="radio" name="day" id="weekday" value="weekday" checked={this.state.weekDaySelectedOption === 'weekday'} onChange={this.handleDayChange} />
                  Weekday
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="day" id="weekend" value="weekend" checked={this.state.weekDaySelectedOption === 'weekend'} onChange={this.handleDayChange} />
                  Weekend
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="product-wrapper">
          {items.map((item, index) =>
                <RowData key={index} item={item} />)}
        </div>
      </div>
    )
  }
}

const RowData = (props) => {
  return (
    <div className="product" key={props.item.id}>
      <img className='beer-image' src={props.item.image_url} alt='' />
      <h3>{props.item.name}</h3>
      <p>{props.item.description}</p>
      <div className="product-props">
        <span><strong>EBC:</strong> {props.item.ebc}</span>
        <span><strong>IBU:</strong> {props.item.ibu}</span>
        <span><strong>ABV:</strong> {props.item.abv}</span>
      </div>
      
    </div>
  )
}
export default Datatable;
