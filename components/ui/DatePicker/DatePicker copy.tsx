import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import { parseISO } from "date-fns";
import { type DatePickerProps } from "./defs";
import { CalendarIcon } from "@/utils/calendarIcon";
import { fontDefault } from "@/utils/fonts";

const DatePicker = ({
	name,
	value = null,
	variant = "standard",
	label,
	defaultValue,
	dateFormat,
	hasPlaceholder = false,
	error,
	minDate,
	maxDate,
	disablePast = false,
	disableFuture = false,
	ariaRequired = true,
	onChange,
}: DatePickerProps) => {
	const handleDateChange = (date: Date | null) => {
		// 	const formattedDate = date ? format(date, "yyyy-MM-dd") : null; // Convert date to ISO string format
		// 	setValue(name, formattedDate); // Set value in form context
		if (onChange) {
			onChange(date);
		}
	};

	const parsedValue = value ? (typeof value === "string" ? parseISO(value) : value) : null;
	const parsedDefaultValue = defaultValue
		? typeof defaultValue === "string"
			? parseISO(defaultValue)
			: defaultValue
		: null;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<MUIDatePicker
				name={name}
				format={dateFormat}
				label={label}
				defaultValue={parsedDefaultValue ?? null}
				disablePast={disablePast}
				disableFuture={disableFuture}
				value={parsedValue ?? null}
				onChange={handleDateChange}
				minDate={minDate}
				maxDate={maxDate}
				slots={{ openPickerIcon: CalendarIcon }}
				slotProps={{
					popper: {
						className: "data-hj-suppress",
						sx: {
							".MuiPaper-root": {
								border: "none",
								borderRadius: 0,
								color: "rgb(42, 49, 50)",
								"& .MuiDayCalendar-header": {
									"& .MuiTypography-root": {
										fontSize: "1.3rem",
										fontFamily: fontDefault,
										color: "rgb(42, 49, 50)",
									},
								},
							},
							"& .MuiPickersCalendarHeader-root": {
								"& .MuiPickersCalendarHeader-labelContainer": {
									fontSize: "1.6rem",
									fontFamily: fontDefault,
									color: "rgb(42, 49, 50)",
								},
							},
							".MuiDayCalendar-monthContainer": {
								"& .MuiDayCalendar-weekContainer": {
									"& .MuiPickersDay-root": {
										fontSize: "1.1rem",
										fontFamily: fontDefault,
										color: "rgb(42, 49, 50)",
										"&.Mui-selected": {
											backgroundColor: "rgb(42, 49, 50)",
											color: "rgb(255,255,255)",
										},
									},
								},
							},
						},
					},
					textField: {
						helperText: error?.message,
						variant,
						InputProps: {
							placeholder: hasPlaceholder ? dateFormat?.toUpperCase() : "",
							"aria-required": ariaRequired,
						},
						sx: {
							"& .MuiInputBase-root": {
								fontSize: "1.6rem",
								backgroundColor: "rgb(255,255,255)",
								fontFamily: fontDefault,
								borderRadius: 0,
								color: "rgb(42, 49, 50)",

								"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
									borderColor: "rgb(42, 49, 50)",
									borderWidth: "1px",
								},
							},
							"& .MuiInputLabel-root": {
								fontSize: "1.6rem",
								fontFamily: fontDefault,
								color: "rgb(42, 49, 50)",
								"&.Mui-focused": {
									color: "rgb(42, 49, 50)",
								},
							},
							"& fieldset": {
								borderColor: "rgba(60, 60, 59, 0.09)",
							},
							"& svg": {
								display: "inline-block",
								width: 22,
								height: 22,
							},
						},
					},
				}}
			/>
			{error && <p className="mt-2 text-left text-base text-error">{error.message}</p>}
		</LocalizationProvider>
	);
};

DatePicker.displayName = "DatePicker";

export default DatePicker;
