(async function () {
await evt.deleteMany({});
  const items = await evt.create([
    //nono123
    {

        eventName: 'Baseball', 
        eventType: 'Sport',
        eventLocation: "We Park",
        additionalInfo: '',
        imageURL: '',
        date: '10-02-2023',
        eventTime: '7pm',


    }

]);

console.log(items);

process.exit();
})();