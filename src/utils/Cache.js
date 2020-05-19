

window.addEventListener("beforeunload", () => {
    window.localStorage.setItem(
      `lastKnown_${window.location.href}`,
      JSON.stringify({
        conditions: {
          userId: "goovie",
          buildNo: "v1"
        },
        data: document.getElementById("root").innerHTML
      })
    );
  });