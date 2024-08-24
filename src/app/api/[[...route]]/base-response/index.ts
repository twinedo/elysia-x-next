export const BaseResponseError = (status: number, message: string) => {
	return {
		status,
		message,
	};
};

export const BaseResponseSuccess = (
	status: number,
	message: string,
	data: Object | Array<any>
) => {
	return {
		status,
		data,
		message,
	};
};
