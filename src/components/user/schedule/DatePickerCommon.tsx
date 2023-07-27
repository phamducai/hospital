import { months, weekDays } from "@/data/japan_th";
import DatePicker from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends"
export default function DatePickerCommon() {
  return (
    <div>
      <DatePicker
        style={{
          width: "65%",
          boxSizing: "border-box",
          height: "34px"
        }}
        containerStyle={{
          marginTop: "-8px",
          width: "65%"
        }}
        value={new Date()}
        weekDays={weekDays}
        months={months}
        plugins={[weekends()]}
      />
    </div>
  );
}
