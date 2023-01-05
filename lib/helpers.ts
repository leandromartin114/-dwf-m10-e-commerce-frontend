import _ from "lodash";

export function groupItemsById(array: any) {
	const result = _.groupBy(array, "objectID");
	let newResult = _.map(result, (r) => {
		return { quantity: r.length, ...r[0] };
	});
	return newResult;
}
