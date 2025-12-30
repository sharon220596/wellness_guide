const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export async function getRecommendations(userGoal, yogasanaNames) {
  try {
    const yogasanaList = (yogasanaNames || []).join(', ');
    const prompt = `Recommend 5-6 yogasanas for: ${userGoal}. Choose only from: ${yogasanaList}. Return only the names separated by commas.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const recommendedText = data.candidates[0].content.parts[0].text;
    const recommendedNames = recommendedText.split(',').map((name) => name.trim());

    return recommendedNames;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}
