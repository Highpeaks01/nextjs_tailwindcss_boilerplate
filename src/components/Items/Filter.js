import { useState, useEffect } from "react";
import { DatePicker, Textarea, Select, SelectItem, Input } from "@heroui/react";


export default function CallsFilter ({ calls, setFilteredCalls }) {

  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {

    let filteredCalls = calls || [];

    if (searchText.trim() !== "") {
      const lowerCaseSearch = searchText.toLowerCase();
      filteredCalls = calls.current.filter(call => 
        call.title.toLowerCase().includes(lowerCaseSearch) ||
        call.context.toLowerCase().includes(lowerCaseSearch)
      );
    } else {
      filteredCalls = calls.current
    }

    if (selectedDate) {
      const selectedTimestamp = new Date(selectedDate).setHours(0, 0, 0, 0);
      filteredCalls = filteredCalls.filter(call => {
        const callDate = new Date(call.timestamp).setHours(0, 0, 0, 0);
        return callDate === selectedTimestamp;
      });
    }

    setFilteredCalls(filteredCalls);
  }, [searchText, selectedDate]);

  return (
    <div className="p-4 flex gap-4">

      {/* Free Search */}
      <Input
        label="Search"
        placeholder="Search calls..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Date Picker */}
      <DatePicker 
        label="Filter by Date"
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  );
};

