import React from 'react';
import ReactDOM from 'react-dom';

const SeatingChart = ({clickSeating}) => (
  <div>
    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Select your pairing station</h4>
          </div>
          <div className="modal-body">
            <div className="center">
            <div className='mentor-section'><h5 className="htable">HIR Table</h5></div>
                <div className='section'>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-01' className='station' data-dismiss="modal"><span>1</span></div>
                    <div onClick={clickSeating} data-location='hr77-02' className='station' data-dismiss="modal"><span>2</span></div>
                    <div onClick={clickSeating} data-location='hr77-03' className='station' data-dismiss="modal"><span>3</span></div>
                  </div>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-04' className='station' data-dismiss="modal"><span>4</span></div>
                    <div onClick={clickSeating} data-location='hr77-05' className='station' data-dismiss="modal"><span>5</span></div>
                    <div onClick={clickSeating} data-location='hr77-06' className='station' data-dismiss="modal"><span>6</span></div>
                  </div>
                </div>
                <div className='section'>
                  <div className='row-2'>
                    <div onClick={clickSeating} data-location='hr77-07' className='station' data-dismiss="modal"><span>7</span></div>
                    <div onClick={clickSeating} data-location='hr77-08' className='station' data-dismiss="modal"><span>8</span></div>
                  </div>
                  <div className='row-2'>
                    <div onClick={clickSeating} data-location='hr77-09' className='station' data-dismiss="modal"><span>9</span></div>
                    <div onClick={clickSeating} data-location='hr77-10' className='station' data-dismiss="modal"><span>10</span></div>
                  </div>
                </div>
                <div className='section'>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-11' className='station' data-dismiss="modal"><span>11</span></div>
                    <div onClick={clickSeating} data-location='hr77-12' className='station' data-dismiss="modal"><span>12</span></div>
                    <div onClick={clickSeating} data-location='hr77-13' className='station' data-dismiss="modal"><span>13</span></div>
                  </div>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-14' className='station' data-dismiss="modal"><span>14</span></div>
                    <div onClick={clickSeating} data-location='hr77-15' className='station' data-dismiss="modal"><span>15</span></div>
                    <div onClick={clickSeating} data-location='hr77-16' className='station' data-dismiss="modal"><span>16</span></div>
                  </div>
                </div>
                <div className='section'>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-17' className='station' data-dismiss="modal"><span>17</span></div>
                    <div onClick={clickSeating} data-location='hr77-18' className='station' data-dismiss="modal"><span>18</span></div>
                    <div onClick={clickSeating} data-location='hr77-19' className='station' data-dismiss="modal"><span>19</span></div>
                  </div>
                  <div className='row-3'>
                    <div onClick={clickSeating} data-location='hr77-20' className='station' data-dismiss="modal"><span>20</span></div>
                    <div onClick={clickSeating} data-location='hr77-21' className='station' data-dismiss="modal"><span>21</span></div>
                    <div onClick={clickSeating} data-location='hr77-22' className='station' data-dismiss="modal"><span>22</span></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SeatingChart;
