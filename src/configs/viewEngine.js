import express from "express";

const configViewEngine = (app) => {
    //static file: chong nguoi khac nhin thay;
    app.use(express.static('./src/public'));
    //
    app.set("view engine", "ejs");
    app.set("views","./src/views");
}
export default configViewEngine;