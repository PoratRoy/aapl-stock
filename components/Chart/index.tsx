import { LinearScale, CategoryScale, PointElement, LineElement, Chart as ChartJs } from "chart.js";
import { initChartData, initChartOptions } from "@/utils/chart";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { StockChartData } from "@/models/types/chart";

type ChartProps = {
    chartData: StockChartData;
};

const Chart = ({ chartData }: ChartProps) => {
    ChartJs.register(LinearScale);
    ChartJs.register(CategoryScale);
    ChartJs.register(PointElement);
    ChartJs.register(LineElement);

    return (
        <section className={styles.chartContainer}>
            <Line data={initChartData(chartData)} options={initChartOptions(chartData.data)} />
        </section>
    );
};

export default Chart;
