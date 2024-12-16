const generatePrompt = (steps, inputs) => {
    const inputsWithContent = steps.map((step, index) => {
        const userInput = inputs[`step${index + 1}`];
        return `### ${step.title}\n${step.description}\n**Eingabe der Lehrkraft:** ${userInput}`;
    }).join("\n\n");

    return `
Erstelle eine vollständige und detaillierte Unterrichtsreihe basierend auf den unten angegebenen Informationen.

Verwende die Inputs der einzelnen Schritte, um eine umfassende und strukturierte Unterrichtsreihe zu entwickeln, die den Bedürfnissen der Lehrkraft und der Klasse entspricht. Beachte dabei die relevanten Lehrplananforderungen, die Zielsetzungen und spezifischen Wünsche.

${inputsWithContent}

### Anforderungen an die Planung

1. Struktur: Die Unterrichtsreihe sollte in sinnvolle Einheiten (z. B. Unterrichtsstunden oder Themenblöcke) unterteilt sein, die aufeinander aufbauen.
2. Inhalte und Methoden:
    - Inhalte müssen die angegebenen Zielsetzungen und Lehrplananforderungen abdecken.
    - Methoden sollten an die Klasse angepasst sein und eine Mischung aus Lehrervorträgen, Gruppenarbeiten, Diskussionen und praktischen Aktivitäten umfassen.
3. Kompetenzorientierung: Die Unterrichtsreihe sollte die im Input beschriebenen Kompetenzen gezielt fördern.
4. Flexibilität: Gib alternative Vorschläge oder Anpassungsmöglichkeiten an, falls bestimmte Stunden nicht wie geplant durchgeführt werden können.
5. Evaluation: Schlag Möglichkeiten vor, um den Lernerfolg der Schülerinnen und Schüler zu evaluieren.

### Output Format

Der Output soll in Markdown-Format bereitgestellt werden. **Bitte gebe ausschließlich den vollständigen Plan als Markdown zurück.**
    `;
};
