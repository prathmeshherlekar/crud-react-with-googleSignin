import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './card';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts'

export default function Dashboard() {
    const userState = useSelector(state => state.reducer);
    var totalUser = userState.length;
    var totalAge = 0
    userState.forEach(element => {
        totalAge = totalAge + parseInt(element.age);
    });
    var averageAge = Math.floor(totalAge / totalUser);
    console.log(userState.length)
    var data = [
        {
            title: "Total Users",
            value: totalUser,
            cardVarient: 'success'
        },
        {
            title: "Average Age of Users",
            value: averageAge,
            cardVarient: 'warning'
        }
    ]

    var chartData = [
        ['User Name', 'Age']
    ]
    userState.forEach(element => {
        chartData.push([element.name, element.age])
    });
    console.log(chartData)
    return (
        <>
            <div className="row ">
                <div className="header bg-light">
                    <div className="col-md-12 text-center">
                        <h4>
                            Dashboard
                        </h4>
                    </div>
                </div>
            </div>
            <div className="row">
                {data.map((item) => {
                    return <Card data={item} />
                })}
            </div>
            <div className="row">

                

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class={`card  shadow h-100 py-2 `}>
                            <div class={`card-body `}  >
                                <Chart
                                    width={'100%'}
                                    height={'100%'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={chartData}
                                    options={{
                                        title: 'Age Comparison of Users',
                                        chartArea: { width: '100%' },
                                        hAxis: {
                                            title: 'Age',
                                            minValue: 0,
                                        },
                                        vAxis: {
                                            title: 'Age',
                                        },
                                    }}
                                    // For tests
                                    // rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
