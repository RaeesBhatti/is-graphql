const regex = /^(?:mutation|query)\s*(?:\(|{)/g;

function isGraphQL(content) {
  if (typeof content !== "string") {
    throw new Error("content must be a string");
  }

  const firstLine = content.toLowerCase().trim().split("\n").shift().split(/\s/g).join("");
  return regex.test(firstLine);
}

module.exports = isGraphQL;
