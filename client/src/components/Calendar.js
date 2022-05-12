import { Calendar as Cal, Select, Radio, Col, Row } from "antd";

import "./Calendar.css";

const { Group, Button } = Radio;

const Calendar = ({ onSelectDate, heading }) => {
  //   function onPanelChange(value, mode) {
  //     console.log(value, mode);
  //   }
  function handleDateSelection(newDate) {
    onSelectDate(newDate);
  }
  return (
    <div className="calendar">
      <Cal
        fullscreen={false}
        onSelect={(e) => {
          handleDateSelection(e);
        }}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className="month-item" key={`${index}`}>
                {months[index]}
              </Select.Option>
            );
          }
          const month = value.month();

          const year = value.year();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            );
          }
          return (
            <div className="p-3">
              <div className="mb-3 fs-4">Choose Date to see bookings </div>
              <Row type="flex" justify="space-between">
                <Col>
                  <Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Button value="month">Month</Button>
                    <Button value="year">Year</Button>
                  </Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue = value.clone();
                      newValue.month(parseInt(selectedMonth, 10));
                      onChange(newValue);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={() => {}}
      />
    </div>
  );
};

export default Calendar;
