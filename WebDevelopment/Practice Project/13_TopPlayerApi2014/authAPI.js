import  Express  from "express";
import  bodyParser  from "body-parser";
const app = Express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userData = [];
const passData = [];

const tokenKeys = [
    "Cjy-Omc-nqmy",
    "QIp-qCa-ogQo",
    "PNu-gmm-2PJ3",
    "YiB-UUo-naMW",
    "x9n-KzK-keLa",
    "3IX-dkF-zO7k",
    "aDe-LRh-iJKY",
    "Ztp-WVo-oxCr",
    "QsN-dBs-TRza",
    "jLm-fGs-KXhE",
    "iPo-VDb-qRvM",
    "rTf-YOm-jSdN",
    "xLu-ZKg-cAhW",
    "eQy-UJo-bNxL",
    "hKi-EFv-gTpM",
    "mHa-CWd-vFiS",
    "sRw-BTk-zGpM",
    "dFa-IOn-LXeW",
    "gJn-QPr-wYvM",
    "fUi-PDx-hCoZ",
    "nBo-VAy-mCwT",
    "cRe-XJl-aVuO",
    "vOp-MTu-eGhF",
    "bLk-NSz-rDwM",
    "kXq-FPa-tZoL",
    "tZu-GYv-oPhM",
    "oHc-WNx-qLrE",
    "lAj-QBm-iSkW",
    "yEp-JCd-fRgM",
    "wTr-UKr-pCjN",
    "pVb-ZHo-xAtM",
    "zMc-LXi-uBfR",
    "uNs-DEy-vRmF",
    "xAl-FVu-kHpM",
    "wIo-RGz-nTyL",
    "vDp-EYs-iMwM",
    "sFj-XMo-oQtV",
    "tNy-ZKa-lWpM",
    "qUh-MFx-wPbG",
    "rIa-LSm-pCxT",
    "oPt-QYv-zTrM",
    "pDo-GEf-sKiW",
    "mYx-UJk-gLaM",
    "nBs-WYr-hOzM",
    "lKz-BVi-dFeL",
    "kTp-JDg-tQwM",
    "hMr-ZWi-fGxO",
    "jVa-HNy-uIvM",
    "iBn-PLa-vWqE",
    "gSd-OEr-bQmW",
    "fLu-QCg-rKzL",
    "eVw-IMh-jTpM",
    "cEo-KSu-xVvN",
    "dFy-TZe-nMoM",
    "bMx-HJo-yPjM",
    "aBi-FWq-zGyL",
    "ZjU-LDv-aGmM",
    "YpH-SRw-cDpL",
    "XgN-PMo-bVfM",
    "WtJ-OCk-qSkT",
    "VrE-GAh-eLhP",
    "UyT-IFo-lZqM",
    "TkW-CXv-uInF",
    "SfR-LEb-jVxM",
    "RhM-VNa-oDwC",
    "QsZ-PYu-gIvM",
    "PdX-HMm-tKyL",
    "OaC-BDr-wXvM",
    "NzV-LOs-kFpM",
    "MyA-WUj-nOrF",
    "LbG-IFr-qRpM",
    "KpE-JTw-zUvM",
    "JcT-FUi-eIwL",
    "IbQ-KLx-pZlM",
    "HxN-CJz-hAoN",
    "GfL-MWc-oJyF",
    "EwD-NVr-gDzM",
    "DvF-PRt-tQuM",
    "CuY-HLo-zNpL",
    "BqW-TGk-rVyM",
    "ApM-DQi-uGcV",
    "zLs-YWi-mFoM",
    "yPf-BLu-lEvM",
    "xRg-UKo-wPyL",
    "wTc-JVv-oZxM",
    "vQo-NXr-pRhE",
    "uCa-WGy-bAtM",
    "tHl-OEq-cTgM",
    "sIe-FYj-iVwR",
    "rTx-ZKr-gWxM",
    "qVm-TJa-hGpL",
    "pYb-SCx-qWuM",
    "oRm-LGe-zTlL",
    "nWs-IFo-mIqM",
    "mKx-UVr-fKvE",
    "lNz-JPt-eAoW",
    "kPa-DHj-rPyM",
    "jGo-ZMy-vBnF",
    "iLu-PCx-oQvM",
    "hRq-BYo-dZmL",
    "gWe-MJy-pKjM",
    "fTi-ERl-hWvN",
    "eMo-QWf-uPxM",
    "dPu-ATk-kZaL",
    "cDw-GCr-lSvM",
    "bFa-YBu-zCjM"
];

app.post("/register", (req,res)=>{    
    const user = req.body.username;
    const pass = req.body.password;

    userData.push(user);   
    passData.push(pass);   
    res.json({message: "Successfully Registered"});
})

app.post("/tokenGenerate", (req,res)=>{
    const tokenUser = req.body.username;
    const tokenPass = req.body.password;
    if((userData[userData.length-1] == tokenUser) && (passData[passData.length-1] == tokenPass)){
        res.json({message: tokenKeys[Math.floor(Math.random() * tokenKeys.length-1)]});
    }else{
        res.json({message: "*invalid username & password"})
    }
})


app.listen(port, ()=>{
    console.log(`Authentication API running on port http://localhost:${port}`);
})