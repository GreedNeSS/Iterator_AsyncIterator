'use strict';

const iterable = {
	[Symbol.asyncIterator]() {
		let i = 0;
		const iterator = {
			async next() {
				return {
					value: i++,
					done: i > 3
				}
			}
		};
		return iterator;
	}
};

const iterator = iterable[Symbol.asyncIterator]();
const step1 = iterator.next();
const step2 = iterator.next();
const step3 = iterator.next();
const step4 = iterator.next();
console.log({ step1, step2, step3, step4 });

(async () => {
	const asyncIterator = iterable[Symbol.asyncIterator]();
	const step1 = await asyncIterator.next().then(i => i.value);
	const step2 = (await asyncIterator.next()).value;
	const step3 = await asyncIterator.next();
	const step4 = asyncIterator.next();
	console.log({ step1, step2, step3, step4 });
})();

(async () => {
	for await (const step of iterable) {
		console.log({ step });
	}
})();

(async () => {
	// console.log({steps: [...iterable]});
})();