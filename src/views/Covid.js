import React from 'react';
import useFetch from '../customize/cusFetch';
import moment from "moment";

export default function Covid() {
    const today = moment().startOf('day').toISOString(true);;
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { datas: dataCovid, isLoading, isError }
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`);

    return (
        <>
            <h3>Covid 19 tracking in VietNam:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>

                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                    {isLoading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }

                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    );
}
