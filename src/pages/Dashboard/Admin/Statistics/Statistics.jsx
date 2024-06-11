import Chart from 'react-apexcharts'
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import moment from 'moment';

const Statistics = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allBookedParcel } = useQuery({
        queryKey: ['bookingsDate'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookingsDate')
            console.log(res.data);
            return res.data;
        }, initialData: []
    })

    console.log(allBookedParcel);


    /*  const state = {
         options: {
             chart: {
                 id: 'apexchart-example'
             },
             xaxis: {
                 categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] 
             }
         },
         series: [{
             name: 'series-1',
             data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
         }]
     }
  */





    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: []
        },
        yaxis: {
            title: {
                text: 'Number of Bookings'
            }
        }
    });

    const [chartSeries, setChartSeries] = useState([{
        name: 'Bookings',
        data: []
    }]);

    useEffect(() => {
        if (allBookedParcel.length > 0) {
            
            // Create a bookings count map
            const bookingsCountMap = allBookedParcel.reduce((acc, curr) => {
                const date = curr.bookingDate?.slice(0, 10);
                acc[date] = (acc[date] || 0) + 1;
                return acc;
            }, {});

            // Get the earliest and latest dates or get start date to end date from allBookedParcel
            const dates = allBookedParcel.map(item => item?.bookingDate?.slice(0, 10));
            const startDate = moment(Math.min(...dates.map(date => new Date(date))));
            const endDate = moment(Math.max(...dates.map(date => new Date(date))));

            // Create a complete date range
            let currentDate = startDate;
            const completeDateRange = [];
            while (currentDate <= endDate) {
                completeDateRange.push(currentDate.format('YYYY-MM-DD'));
                currentDate = currentDate.add(1, 'days');
            }

            // Create the final data set ensuring every date has a count
            const bookingCounts = completeDateRange.map(date => bookingsCountMap[date] || 0);

            // Filter out dates with zero bookings
            const filteredDates = completeDateRange.filter(date => bookingsCountMap[date] > 0);
            const filteredBookingCounts = bookingCounts.filter(count => count > 0);

            /* //-----All date implement which date have no data show date but not any booking
              // Update chart options and series data
              setChartOptions(prevOptions => ({
                  ...prevOptions,
                  xaxis: {
                      categories: completeDateRange
                  }
              }));
  
              setChartSeries([{
                  name: 'Bookings',
                  data: bookingCounts
              }]);
          }
      }, [allBookedParcel]);
   */

            // Update chart options and series data
            setChartOptions(prevOptions => ({
                ...prevOptions,
                xaxis: {
                    categories: filteredDates
                }
            }));

            setChartSeries([{
                name: 'Bookings',
                data: filteredBookingCounts
            }]);
        }
    }, [allBookedParcel]);




    return (
        <div>
            <h1 >A Bar Chart Bookings By Date</h1>
            {/*    <div>
                {
                    allBookedParcel.map(item => <p key={item.id}>{item.bookingDate.slice(0, 10)}</p>)


                }
            </div>
 */}
            <div>
                <Chart options={chartOptions} series={chartSeries} type="bar" width={500} height={600} />


            </div>

        </div>
    );
};

export default Statistics;