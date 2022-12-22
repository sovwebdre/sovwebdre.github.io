function text() {
    var chuch;
    var mp;
    var time;
    var numpy;
    var pd;
    var plt;
    document.getElementById("result").innerHTML = "";
    document.getElementById('result2').innerHTML = "";
    document.getElementById('result3').innerHTML = "";
    document.getElementById('result4').inneHTML = "";
    document.getElementById('result5').innerHTML = "";
    document.getElementById('result6').innerHTML = "";
    chuch=document.getElementById('cv2');
    mp=document.getElementById('mediapipe');
    time=document.getElementById('time');
    numpy=document.getElementById('numpy');
    pd=document.getElementById('pandas');
    plt=document.getElementById('matplotlib.pyplot');
        if (chuch.checked) {
            document.getElementById('result').append("import cv2");
        }
        else {
            document.getElementById("result").innerHTML = "";
        }
        if (mp.checked) {
            document.getElementById('result2').append("import mediapipe as mp");
        }
        else {
            document.getElementById('result2').innerHTML = "";
        }
        if (time.checked) {
            document.getElementById('result3').append("import time");
        }
        else {
            document.getElementById('result3').innerHTML = "";
        }
        if (numpy.checked) {
            document.getElementById('result4').innerHTML = "import numpy as np";
        }
        else {
            document.getElementById('result4').innerHTML = "";
        }
        if (pd.checked) {
            document.getElementById('result5').append("import pandas as pd");
        }
        else {
            document.getElementById('result5').innerHTML = "";
        }
        if (plt.checked) {
            document.getElementById('result6').append("import matplotlib.pyplot as plt");
        }
        else {
            document.getElementById('result6').innerHTML = "";
        }
}