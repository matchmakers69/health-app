import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { type DatePickerProps } from "./defs";
import { CalendarIcon } from "@/utils/calendarIcon";
import { fontDefault } from "@/utils/fonts";
import { preserveDateTime } from "@/utils/dates";

const DatePicker = ({
	name,
	variant = "standard",
	label,
	dateFormat,
	hasPlaceholder = false,
	error,
	minDate,
	maxDate,
	disablePast = false,
	disableFuture = false,
	ariaRequired = true,
	control,
}: DatePickerProps) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<MUIDatePicker
							onChange={(newValue: Date | null) => {
								const updatedDate = preserveDateTime(newValue);
								onChange(updatedDate);
							}}
							value={value}
							maxDate={maxDate}
							minDate={minDate}
							format={dateFormat}
							label={label}
							disablePast={disablePast}
							disableFuture={disableFuture}
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
					</LocalizationProvider>
				)}
			/>
			{error && <p className="mt-2 text-left text-base text-error">{error.message}</p>}
		</>
	);
};

DatePicker.displayName = "DatePicker";

export default DatePicker;
