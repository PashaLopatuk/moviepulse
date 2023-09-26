export async function load(id: string, items: string, fetchFunc: (items: string, id: string) => any, func: (x: any) => void) {
	const res = await fetchFunc(items, id)
	console.log("load.ts: ", res)
	func(res)
}
