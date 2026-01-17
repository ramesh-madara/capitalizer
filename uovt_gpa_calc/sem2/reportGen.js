function generateReportGPA(titlePrefix = "GPA Report Downloaded") {
    // 1. Webhook URL
    const webhookURL = "https://discord.com/api/webhooks/1461790323473776852/3ySq78mDMK7Qay9SNLo9b2zG9Bt7qNd6tUzUPdqUPn2hUD2jxnuL0XMuA9NBVXDg-JrF";

    // 2. Data Extraction
    const name = document.getElementById('studentName').value || "Unknown";
    const indexNumber = getIndexNumber();
    const yearSelect = document.getElementById("year");
    const year = yearSelect.selectedIndex >= 0 ? yearSelect.options[yearSelect.selectedIndex].text : "Unknown";

    const sem1GPA = document.getElementById('display-sem1-gpa').innerText;
    const sem2GPA = document.getElementById('display-sem2-gpa').innerText;
    const fgpa = document.getElementById('display-fgpa').innerText;

    // 3. Sem 1 Grades Logic
    let sem1Content = "";
    if (appState.sem1Mode === 'input') {
        sem1Content = `Pre-calculated GPA: ${appState.sem1SimpleGPA || "0.00"}`;
    } else {
        // Manual Mode: List subjects
        // existing global 'subjects' object from index.html
        // 1. Collect valid entries
        const s1Entries = subjects.sem1.map((sub, i) => {
            const grade = appState.sem1Grades[i];
            if (grade) {
                // Strip range if present
                return { name: sub.name, grade: grade.replace(/\s\(.*\)/, '') };
            }
            return null;
        }).filter(e => e !== null);

        if (s1Entries.length > 0) {
            // 2. Calc Max Length
            const maxLen = Math.max(...s1Entries.map(e => e.name.length));
            // 3. Format with padding
            sem1Content = s1Entries.map(e => `${e.name.padEnd(maxLen + 2)} : ${e.grade}`).join('\n');
        } else {
            sem1Content = "No grades entered.";
        }
    }

    // 4. Sem 2 Grades Logic
    const s2Entries = subjects.sem2.map((sub, i) => {
        const grade = appState.sem2Grades[i];
        if (grade && grade !== 'nr') {
            // Strip range if present
            return { name: sub.name, grade: grade.replace(/\s\(.*\)/, '') };
        }
        return null;
    }).filter(e => e !== null);

    let sem2Content = "No grades entered.";
    if (s2Entries.length > 0) {
        const maxLen = Math.max(...s2Entries.map(e => e.name.length));
        sem2Content = s2Entries.map(e => `${e.name.padEnd(maxLen + 2)} : ${e.grade}`).join('\n');
    }

    // 5. Conditional Formatting (Green vs Yellow)
    const fgpaValue = parseFloat(fgpa);
    const embedColor = fgpaValue > 3.5 ? 5763719 : 16776960;

    // 6. Construct Payload
    const payload = {
        embeds: [
            {
                title: `${titlePrefix} : ${fgpa}`,
                color: embedColor,
                fields: [
                    {
                        name: "Student Info",
                        value: `**Name:** ${name}\n**Index:** ${indexNumber}\n**Year:** ${year}`,
                        inline: true
                    },
                    {
                        name: "Final Result",
                        value: `**FGPA:** ${fgpa}`,
                        inline: true
                    },
                    { name: `Sem 1 Grades (${sem1GPA})`, value: "```text\n" + sem1Content + "\n```" },
                    { name: `Sem 2 Grades (${sem2GPA})`, value: "```text\n" + sem2Content + "\n```" }
                ],
                footer: {
                    text: `Data captured at ${new Date().toLocaleString()}`
                }
            }
        ]
    };

    // 7. Execution (Async Fetch)
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch(() => { });
}
