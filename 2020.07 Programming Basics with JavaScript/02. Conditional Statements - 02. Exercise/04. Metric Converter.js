function metricConverter(arg1, arg2, arg3) {
    let num = Number(arg1);
    let inputMetric = arg2;
    let outputMetric = arg3;

    if (inputMetric === "mm") {        // first convert all metrics to meter
        num /= 1000;
    } else if (inputMetric === "cm") {
        num /= 100;
    }

    if (outputMetric === "mm") {      // second convert all meters to output metric
        num *= 1000;
    } else if (outputMetric === "cm") {
        num *= 100;
    }

    console.log(num.toFixed(3));
}

metricConverter("12", "mm", "m");
metricConverter("150", "m", "cm");
metricConverter("45", "cm", "mm");