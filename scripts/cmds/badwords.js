module.exports = {
	config: {
		name: "badwords",
		aliases: ["badword"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			en: "Turn on/off/add/remove bad words warning, if a member violates, he will be warned, the second time he will be kicked out of the chat box"
		},
		category: "box chat",
		guide: {
			en: "   {pn} add <words>: add banned words (you can add multiple words separated by commas \",\" or vertical bars \"|\")"
				+ "\n   {pn} delete <words>: delete banned words (you can delete multiple words separated by commas \",\" or vertical bars \"|\")"
				+ "\n   {pn} list <hide | leave blank>: turn off warning (add \"hide\" to hide banned words)"
				+ "\n   {pn} unwarn [<userID> | <@tag>]: remove 1 warning of 1 member"
				+ "\n   {pn} on: turn off warning"
				+ "\n   {pn} off: turn on warning"
		}
	},

	langs: {
		en: {
			onText: "on",
			offText: "off",
			onlyAdmin: "⚠️ | Only admins can add banned words to the list",
			missingWords: "⚠️ | You haven't entered the banned words",
			addedSuccess: "✅ | Added %1 banned words to the list",
			alreadyExist: "❌ | %1 banned words already exist in the list before: %2",
			tooShort: "⚠️ | %1 banned words cannot be added to the list because they are shorter than 2 characters: %2",
			onlyAdmin2: "⚠️ | Only admins can delete banned words from the list",
			missingWords2: "⚠️ | You haven't entered the words to delete",
			deletedSuccess: "✅ | Deleted %1 banned words from the list",
			notExist: "❌ | %1 banned words do not exist in the list before: %2",
			emptyList: "⚠️ | The list of banned words in your group is currently empty",
			badWordsList: "📑 | The list of banned words in your group: %1",
			onlyAdmin3: "⚠️ | Only admins can %1 this feature",
			turnedOnOrOff: "✅ | Banned words warning has been %1",
			onlyAdmin4: "⚠️ | Only admins can delete banned words warning",
			missingTarget: "⚠️ | You haven't entered user ID or tagged user",
			notWarned: "⚠️ | User %1 has not been warned for banned words",
			removedWarn: "✅ | User %1 | %2 has been removed 1 banned words warning",
			warned: "⚠️ | Banned words \"%1\" have been detected in your message, if you continue to violate you will be kicked from the group.",
			warned2: "⚠️ | Banned words \"%1\" have been detected in your message, you have violated 2 times and will be kicked from the group.",
			needAdmin: "Bot needs admin privileges to kick banned members",
			unwarned: "✅ | Removed banned words warning of user %1 | %2"
		}
	},

	onStart: async function ({ message, event, args, threadsData, usersData, role, getLang }) {
		if (!await threadsData.get(event.threadID, "data.badWords"))
			await threadsData.set(event.threadID, {