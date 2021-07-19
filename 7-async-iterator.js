'use strict';

const asyncIterator = {
	counter: 0,
	async next() {
		return {
			value: this.counter++,
			done: this.counter > 3,
		};
	}
};

(async () => {
	const step1 = await asyncIterator.next().then(i => i.value);
	const step2 = (await asyncIterator.next()).value;
	const step3 = await asyncIterator.next();
	const step4 = asyncIterator.next();
	console.log({ step1, step2, step3, step4 });
})();

{
	const asyncIterator = {
		counter: 0,
		async next() {
			return {
				value: this.counter++,
				done: this.counter > 3,
			};
		}
	};

	const step1 = asyncIterator.next();
	const step2 = asyncIterator.next();
	const step3 = asyncIterator.next();
	const step4 = asyncIterator.next();
	console.log({ step1, step2, step3, step4 });
}