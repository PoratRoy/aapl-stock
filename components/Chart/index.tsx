import {
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    BarElement,
    Legend,
    Tooltip,
    Filler,
    Chart as ChartJS,
} from "chart.js";
import { initChartData, initChartOptions } from "@/utils/chart";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { StockChartData } from "@/models/types/chart";
import LoadingChart from "../Loading/LoadingChart";

type ChartProps = {
    chartData: StockChartData;
    isLoading: boolean;
};

const Chart: React.FC<ChartProps> = ({ chartData, isLoading }) => {
    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        Filler,
    );

    return (
        <section className={styles.chartContainer}>
            <Line data={initChartData(chartData)} options={initChartOptions(chartData.data)} />
            {isLoading ? <LoadingChart /> : null}
        </section>
    );
};

export default Chart;
