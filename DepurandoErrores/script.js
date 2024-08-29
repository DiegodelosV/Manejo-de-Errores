function trace() {
  try {
    throw new Error("miErrorpersonalizado");
  } catch (e) {
    console.error("ha ocurrido un error", e);
  }
}

function b() {
  trace();
}

function a() {
  b(1, "hola", undefined, [], {});
}

a();
