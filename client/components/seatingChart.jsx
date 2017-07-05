import React from 'react';
import ReactDOM from 'react-dom';

const SeatingChart = ({clickSeating}) => (

  <div>	
    <div className='mentor-section'>HIR Table</div>

    <div className='section'>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-01' className='station'>1</div>
        <div onClick={clickSeating} data-location='hr77-02' className='station'>2</div>
        <div onClick={clickSeating} data-location='hr77-03' className='station'>3</div>
      </div>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-04' className='station'>4</div>
        <div onClick={clickSeating} data-location='hr77-05' className='station'>5</div>
        <div onClick={clickSeating} data-location='hr77-06' className='station'>6</div>
      </div>
    </div>

    <div className='section'>
      <div className='row-2'>
        <div onClick={clickSeating} data-location='hr77-07' className='station'>7</div>
        <div onClick={clickSeating} data-location='hr77-08' className='station'>8</div>
      </div>
      <div className='row-2'>
        <div onClick={clickSeating} data-location='hr77-09' className='station'>9</div>
        <div onClick={clickSeating} data-location='hr77-10' className='station'>10</div>
      </div>
    </div>

    <div className='section'>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-11' className='station'>11</div>
        <div onClick={clickSeating} data-location='hr77-12' className='station'>12</div>
        <div onClick={clickSeating} data-location='hr77-13' className='station'>13</div>
      </div>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-14' className='station'>14</div>
        <div onClick={clickSeating} data-location='hr77-15' className='station'>15</div>
        <div onClick={clickSeating} data-location='hr77-16' className='station'>16</div>
      </div>
    </div>

    <div className='section'>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-17' className='station'>17</div>
        <div onClick={clickSeating} data-location='hr77-18' className='station'>18</div>
        <div onClick={clickSeating} data-location='hr77-19' className='station'>19</div>
      </div>
      <div className='row-3'>
        <div onClick={clickSeating} data-location='hr77-20' className='station'>20</div>
        <div onClick={clickSeating} data-location='hr77-21' className='station'>21</div>
        <div onClick={clickSeating} data-location='hr77-22' className='station'>22</div>
      </div>
    </div>

  </div>
);

export default SeatingChart;
