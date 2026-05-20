document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const formView = document.getElementById('form-view');
    const successView = document.getElementById('success-view');
    const backBtn = document.getElementById('backBtn');

    // Mapeamento de campos e seus respectivos spans de erro
    const fields = [
        { id: 'firstName', errorId: 'firstName-error' },
        { id: 'lastName', errorId: 'lastName-error' },
        { id: 'cpf', errorId: 'cpf-error', pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/ },
        { id: 'email', errorId: 'email-error', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { id: 'dtnasc', errorId: 'dtnasc-error' }
    ];

    // Máscara de CPF
    document.getElementById('cpf').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
        // Limpa erro ao digitar
        hideError('cpf', 'cpf-error');
    });

    const showError = (fieldId, errorId) => {
        const input = document.getElementById(fieldId);
        const errorSpan = document.getElementById(errorId);
        input.classList.add('invalid');
        errorSpan.style.display = 'block';
    };

    const hideError = (fieldId, errorId) => {
        const input = document.getElementById(fieldId);
        const errorSpan = document.getElementById(errorId);
        input.classList.remove('invalid');
        errorSpan.style.display = 'none';
    };

    // Validação em tempo real ao sair do campo
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener('blur', () => {
            if (!input.value || (field.pattern && !field.pattern.test(input.value))) {
                showError(field.id, field.errorId);
            } else {
                hideError(field.id, field.errorId);
            }
        });
        input.addEventListener('input', () => hideError(field.id, field.errorId));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const isFieldValid = input.value && (!field.pattern || field.pattern.test(input.value));
            
            if (!isFieldValid) {
                showError(field.id, field.errorId);
                isValid = false;
            }
        });

        if (isValid) {
            const button = document.getElementById('submitBtn');
            const buttonSpan = button.querySelector('span');
            button.disabled = true;
            buttonSpan.innerText = 'ENVIANDO...';

            setTimeout(() => {
                formView.classList.add('hidden');
                successView.classList.remove('hidden');
                button.disabled = false;
                buttonSpan.innerText = 'CRIAR MINHA CONTA';
                form.reset();
            }, 1500);
        }
    });

    backBtn.addEventListener('click', () => {
        successView.classList.add('hidden');
        formView.classList.remove('hidden');
        fields.forEach(f => hideError(f.id, f.errorId));
    });
});
