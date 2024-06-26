import { render, fireEvent, screen, renderHook } from "@testing-library/react";
import { useClickOutside } from "../useClickOutside";

describe("Click outside detection works when", () => {
	it("reference is defined", () => {
		const { result } = renderHook(() =>
			useClickOutside({
				onOutside: jest.fn(),
			}),
		);

		expect(result.current.ref).toBeDefined();
	});

	it("reference is initially null", () => {
		const { result } = renderHook(() =>
			useClickOutside({
				onOutside: jest.fn(),
			}),
		);

		expect(result.current.ref.current).toBeNull();
	});

	it("calls callback when clicked outside", () => {
		const onOutSideSpy = jest.fn();
		const Fixture = () => {
			const { ref } = useClickOutside<HTMLDivElement>({
				onOutside: onOutSideSpy,
			});

			return (
				<>
					<div ref={ref}>
						<button>Click me inside</button>
					</div>
					<button>Click me outside</button>
				</>
			);
		};

		render(<Fixture />);

		fireEvent.mouseDown(screen.getByText(/Click me outside/));
		fireEvent.mouseDown(screen.getByText(/Click me inside/));

		expect(onOutSideSpy).toHaveBeenCalledTimes(1);
	});

	it("removes event listeners", () => {
		const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

		const { unmount } = renderHook(() => useClickOutside({ onOutside: jest.fn() }));

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function));
	});
});
