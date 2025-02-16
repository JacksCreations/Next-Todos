import React from "react";

const Logbook = () => {
  return (
    <div>
      <h2>Flight Log</h2>

      <table>
        <tr>
          <th>Date</th>
          <th>Aircraft</th>
          <th>Tail Number</th>
          <th>Route</th>
          <th>Total Time</th>
          <th>XC Time</th>
          <th>Night</th>
          <th>IFR</th>
          <th>Landings</th>
          <th>Instructor</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>8/28/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KSPI KPIA KBMI KSPI</td>
          <td>2.3</td>
          <td>2.3</td>
          <td>0</td>
          <td></td>
          <td>2.3</td>
          <td></td>
          <td>LN XC</td>
        </tr>
        <tr>
          <td>8/29/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KSPI KSPI</td>
          <td>1.5</td>
          <td>1.5</td>
          <td>0</td>
          <td></td>
          <td>1.5</td>
          <td></td>
          <td>WA</td>
        </tr>
        <tr>
          <td>9/3/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KSPI KSPI</td>
          <td>1.4</td>
          <td>1.4</td>
          <td>0</td>
          <td></td>
          <td>1.4</td>
          <td></td>
          <td>WA</td>
        </tr>
        <tr>
          <td>9/3/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KSPI KBMI KSPI</td>
          <td>2.0</td>
          <td>2.0</td>
          <td>0</td>
          <td></td>
          <td>2.0</td>
          <td></td>
          <td>KBMI XC JR</td>
        </tr>
        <tr>
          <td>9/4/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KSPI KBMI KRFD</td>
          <td>1.8</td>
          <td>1.8</td>
          <td>0.4</td>
          <td>1</td>
          <td>1.8</td>
          <td>1.8</td>
          <td>XC FT LL KRFD</td>
        </tr>
        <tr>
          <td>9/4/24</td>
          <td>PA28</td>
          <td>N20LL</td>
          <td>KRFD KUGN</td>
          <td>1.1</td>
          <td>1.1</td>
          <td>0</td>
          <td></td>
          <td>1.1</td>
          <td>1.1</td>
          <td>XC FT LL</td>
        </tr>
      </table>
    </div>
  );
};

export default Logbook;
