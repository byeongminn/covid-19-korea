import './App.css';
import React, { useState, useEffect } from "react";
import InfoBox from './InfoBox';

function App() {
  const [country, setCountry] = useState({});
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCountryData = async () => {
      await fetch("https://api.corona-19.kr/korea/?serviceKey=sAm6JriOBYtnbdFzyvRe7P45clqQ8Mf2W")
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
          console.log(data);
        })
    }

    const getCitiesData = async () => {
      await fetch("https://api.corona-19.kr/korea/country/new/?serviceKey=sAm6JriOBYtnbdFzyvRe7P45clqQ8Mf2W")
        .then((response) => response.json())
        .then((data) => {
          setCities(data);
          console.log(data);
        })
    }
    getCountryData();
    getCitiesData();
  }, [])

  return (
    <div className="app">
      <div className="app__top">
        <h1>코로나 감염현황</h1>
      </div>
      <div className="app__middle">
        {/* 확진자 수 / 격리 해제 / 격리 중 / 사망 / 검사 진행 */}
        <InfoBox title="확진환자" total={country.TotalCase} fluctuation={cities.korea.newCase} />
        <InfoBox title="격리해제" total={country.TotalRecovered} fluctuation={country.TodayRecovered} />
        <InfoBox title="격리중" total={country.NowCase} />
        <InfoBox title="사망" total={country.TotalDeath} fluctuation={country.TodayDeath} />
        <InfoBox title="검사진행" total={country.checkingCounter} />

        {/* 시도별 테이블 */}
      </div>
      <div className="app__bottom">
        {/* 할 수 있다면 지도와 그래프 */}
      </div>
    </div>
  );
}

export default App;
