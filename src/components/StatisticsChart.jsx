import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import cloneDeep from "lodash/cloneDeep";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";

// Initialize the modules
// Exporting(Highcharts); // Apply exporting to Highcharts
// ExportData(Highcharts); // Apply export-data to Highcharts

export default function Statistics() {
    const habits = useSelector((state) => state.habit.value);
    const completedTasks = habits.filter((ele) => ele.completed === true);

    const chartsConfiguration = [
        {
            chart: { type: "pie" },
            title: { text: "Task Completion Status" },
            series: [
                {
                    name: "Tasks",
                    data: [
                        {
                            name: "Completed Tasks",
                            y: completedTasks.length,
                            color: "#28a745",
                        },
                        {
                            name: "Not Completed Tasks",
                            y: habits.length - completedTasks.length,
                            color: "#dc3545",
                        },
                    ],
                },
            ],
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            exporting: { enabled: true }, // Enable exporting
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}: {point.percentage:.1f}%",
                    },
                },
            },
        },
        {
            chart: { type: "bar" },
            title: { text: "Task Repeatability Ratio" },
            xAxis: {
                categories: ["Tasks"],
                title: { text: "Task Status" },
            },
            yAxis: {
                min: 0,
                title: { text: "Number of Tasks" },
            },
            series: [
                {
                    name: "Every Days Tasks Count",
                    data: [
                        habits.filter((ele) =>
                            ele.repeatability.includes("Every")
                        ).length || 0,
                    ],
                    color: "yellow",
                },
                {
                    name: "Few Days Tasks Count",
                    data: [
                        habits.filter((ele) =>
                            ele.repeatability.includes("Few")
                        ).length || 0,
                    ],
                    color: "skyblue",
                },
                {
                    name: "Weekly Tasks Count",
                    data: [
                        habits.filter((ele) =>
                            ele.repeatability.includes("Weekly")
                        ).length || 0,
                    ],
                    color: "grey",
                },
                {
                    name: "Monthly Tasks Count",
                    data: [
                        habits.filter((ele) =>
                            ele.repeatability.includes("Monthly")
                        ).length || 0,
                    ],
                    color: "orange",
                },
                {
                    name: "Multiple Days Per Period Tasks Count",
                    data: [
                        habits.filter((ele) =>
                            ele.repeatability.includes("Multiple")
                        ).length || 0,
                    ],
                    color: "blue",
                },
            ],
            tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>" },
            exporting: { enabled: true }, // Enable exporting
        },
    ];
    console.log(chartsConfiguration,"configuration");
    

    return (
        <div className="grid md:grid-cols-2 gap-2 ">
             {/* flex  flex-col justify-start  gap-5  py-5 md:flex-row */}
            {chartsConfiguration.map((ele, index) => (
              <div className=" rounded-sm shadow-xl md:w-auto">
                  <HighchartsReact
                    key={index}
                    className=" rounded-sm"
                    highcharts={Highcharts}
                    options={cloneDeep(ele)}
                />
              </div>
            ))}
        </div>
    );
}
