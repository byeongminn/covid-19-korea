import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, total, fluctuation }) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textPrimary">{title}</Typography>
                <h2 className="infoBox__total">{total}</h2>
                <Typography className={`infoBox__fluctuation ${!fluctuation && "hidden"}`}>+{fluctuation}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
