const ENABLE_DISCORD_WEBHOOK = false;

function generateReportGPA(titlePrefix = "GPA Report Downloaded") {
    // 1. Webhook URL
    const webhookURL = "https://discord.com/api/webhooks/1461790323473776852/3ySq78mDMK7Qay9SNLo9b2zG9Bt7qNd6tUzUPdqUPn2hUD2jxnuL0XMuA9NBVXDg-JrF";

    // 2. Data Extraction
    const name = document.getElementById('studentName').value || "Unknown";
    const indexNumber = getIndexNumber();
    const yearSelect = document.getElementById("year");
    const year = yearSelect.selectedIndex >= 0 ? yearSelect.options[yearSelect.selectedIndex].text : "Unknown";
    const dept = document.getElementById('Department').value;

    const sem1GPA = document.getElementById('display-sem1-gpa').innerText;
    const sem2GPA = document.getElementById('display-sem2-gpa').innerText;
    const fgpa = document.getElementById('display-fgpa').innerText;

    // 3. Sem 1 Grades Logic
    let sem1Content = "";
    if (appState.sem1Mode === 'input') {
        sem1Content = `Pre-calculated GPA: ${appState.sem1SimpleGPA || "0.00"}`;
    } else {
        const s1Entries = subjects.sem1.map((sub, i) => {
            const grade = appState.sem1Grades[i];
            if (grade) {
                return { name: sub.name, grade: grade.replace(/\s\(.*\)/, '') };
            }
            return null;
        }).filter(e => e !== null);

        if (s1Entries.length > 0) {
            const maxLen = Math.max(...s1Entries.map(e => e.name.length));
            sem1Content = s1Entries.map(e => `${e.name.padEnd(maxLen + 2)} : ${e.grade}`).join('\n');
        } else {
            sem1Content = "No grades entered.";
        }
    }

    // 4. Sem 2 Grades Logic
    const s2Entries = subjects.sem2.map((sub, i) => {
        const grade = appState.sem2Grades[i];
        if (grade && grade !== 'nr') {
            return { name: sub.name, grade: grade.replace(/\s\(.*\)/, '') };
        }
        return null;
    }).filter(e => e !== null);

    let sem2Content = "No grades entered.";
    if (s2Entries.length > 0) {
        const maxLen = Math.max(...s2Entries.map(e => e.name.length));
        sem2Content = s2Entries.map(e => `${e.name.padEnd(maxLen + 2)} : ${e.grade}`).join('\n');
    }

    // 5. Sem 3 Grades Logic
    let sem3Content = "No grades entered.";
    let sem3GPA = document.getElementById('display-sem3-gpa') ? document.getElementById('display-sem3-gpa').innerText : "0.00";
    if (dept) {
        const sem3SubList = typeof getSem3Subjects === 'function' ? getSem3Subjects(dept) : [];
        const s3Entries = sem3SubList.map((sub, i) => {
            const grade = appState.sem3Grades[i];
            if (grade && grade !== '--' && grade !== 'nr') {
                return { name: sub.name, grade: grade.replace(/\s\(.*\)/, '') };
            }
            return null;
        }).filter(e => e !== null);

        if (s3Entries.length > 0) {
            const maxLen = Math.max(...s3Entries.map(e => e.name.length));
            sem3Content = s3Entries.map(e => `${e.name.padEnd(maxLen + 2)} : ${e.grade}`).join('\n');
        }
    } else {
        sem3Content = "No department selected.";
    }

    // Futures Data
    let futuresContent = "";
    if (appState.futuresMode || document.getElementById('futures-toggle-btn').classList.contains('active')) {
        const target = document.getElementById('fbar-target') ? document.getElementById('fbar-target').innerText : '--';
        const required = document.getElementById('fbar-required') ? document.getElementById('fbar-required').innerText : '--';
        const status = document.getElementById('fbar-status') ? document.getElementById('fbar-status').innerText : '--';
        if (target !== '--' || required !== '--') {
            futuresContent = `**Target FGPA:** ${target}\n**Required Avg:** ${required}\n**Status:** ${status}`;
        }
    }

    // 6. Conditional Formatting (Green vs Yellow)
    const fgpaValue = parseFloat(fgpa);
    const embedColor = fgpaValue > 3.5 ? 5763719 : 16776960;

    // 7. Construct Payload
    const fields = [
        {
            name: "Student Info",
            value: `**Name:** ${name}\n**Index:** ${indexNumber}\n**Year:** ${year}${dept ? '\n**Dept:** ' + dept : ''}`,
            inline: true
        },
        {
            name: "Final Result",
            value: `**FGPA:** ${fgpa}`,
            inline: true
        },
        { name: `Sem 1 Grades (${sem1GPA})`, value: "```text\n" + sem1Content + "\n```" },
        { name: `Sem 2 Grades (${sem2GPA})`, value: "```text\n" + sem2Content + "\n```" },
        { name: `Sem 3 Grades (${sem3GPA})`, value: "```text\n" + sem3Content + "\n```" }
    ];

    if (futuresContent) {
        fields.push({ name: "Futures Mode", value: futuresContent });
    }

    const payload = {
        embeds: [
            {
                title: `${titlePrefix} : ${fgpa}`,
                color: embedColor,
                fields: fields,
                footer: {
                    text: `Data captured at ${new Date().toLocaleString()}`
                }
            }
        ]
    };

    // 8. Execution (Async Fetch)
    if (ENABLE_DISCORD_WEBHOOK) {
        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).catch(() => { });
    }
}
