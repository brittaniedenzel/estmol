async function renderAsync(scene, camera, renderer) {
    function renderFrame() {
        return new Promise(resolve => {
            // Render the scene
            renderer.render(scene, camera);

            // Use requestAnimationFrame to schedule the next frame
            requestAnimationFrame(() => {
                resolve();
            });
        });
    }

    while (true) {
        await renderFrame();
    }
}
