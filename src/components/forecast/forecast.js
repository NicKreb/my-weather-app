import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="item-small" src={`icons/${item.weather[0].icon}.png`}/>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description"> {item.weather[0].description} </label>
                                    <label className="minMax"> {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°C |</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}% |</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} meters |</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

//allowZeroExpanded allows for no accordion element to be expanded. vs without it at least one item has to be expanded.

export default Forecast;